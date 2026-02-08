import { useState, useCallback, useRef } from 'react';

const messages = [
  "Nice try 😜",
  "Are you sure? Think again 💕",
  "This button doesn't work for you 😌",
  "Really? 🤔",
  "Nope! 😄",
  "Try the other one! 💖",
];

export function useEvasiveButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState<string>('');
  const [scale, setScale] = useState(1);
  const attemptCount = useRef(0);
  const containerRef = useRef<{ width: number; height: number }>({ width: 200, height: 100 });

  const moveButton = useCallback(() => {
    attemptCount.current += 1;

    // Update message
    const messageIndex = Math.min(attemptCount.current - 1, messages.length - 1);
    setMessage(messages[messageIndex]);

    // Shrink button progressively
    const newScale = Math.max(0.5, 1 - attemptCount.current * 0.1);
    setScale(newScale);

    // Calculate safe random position within container
    const maxX = containerRef.current.width - 200 * newScale;
    const maxY = containerRef.current.height - 100 * newScale;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ x: newX, y: newY });
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (attemptCount.current < 3) {
      moveButton();
    }
  }, [moveButton]);

  const handlePointerEnter = useCallback(() => {
    if (attemptCount.current < 3) {
      moveButton();
    }
  }, [moveButton]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  }, [moveButton]);

  return {
    position,
    message,
    scale,
    handlePointerMove,
    handlePointerEnter,
    handleTouchStart,
    handleClick,
  };
}
