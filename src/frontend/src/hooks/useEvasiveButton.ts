import { useRef, useState, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize button position to center-right
  useEffect(() => {
    if (!isInitialized && containerRef.current && buttonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = buttonRef.current.getBoundingClientRect();
      
      // Position on the right side initially
      const initialX = container.width * 0.75;
      const initialY = container.height / 2;
      
      setPosition({ x: initialX, y: initialY });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const getRandomPosition = useCallback((): Position => {
    if (!containerRef.current || !buttonRef.current) {
      return { x: 0, y: 0 };
    }

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();

    // Add padding to keep button fully visible
    const padding = 20;
    const minX = button.width / 2 + padding;
    const maxX = container.width - button.width / 2 - padding;
    const minY = button.height / 2 + padding;
    const maxY = container.height - button.height / 2 - padding;

    // Generate random position within safe bounds
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    return { x: newX, y: newY };
  }, []);

  const moveButton = useCallback(() => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
  }, [getRandomPosition]);

  const handleMouseEnter = useCallback(() => {
    moveButton();
  }, [moveButton]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  return {
    containerRef,
    buttonRef,
    position,
    handleMouseEnter,
    handlePointerDown,
    handleTouchStart,
  };
}
