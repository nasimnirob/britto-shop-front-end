import { useRef, useState, useEffect } from "react";

const ScrollableList = ({ children }) => {
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  const updateThumb = () => {
    const el = containerRef.current;
    if (!el) return;
    const isOverflow = el.scrollHeight > el.clientHeight;
    setShowScrollbar(isOverflow);
    const ratio = el.clientHeight / el.scrollHeight;
    setThumbHeight(ratio * el.clientHeight);
    setThumbTop((el.scrollTop / el.scrollHeight) * el.clientHeight);
  };

  useEffect(() => {
    updateThumb();
  }, [children]);

  const onPointerDown = (e) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = containerRef.current.scrollTop;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
    e.stopPropagation();
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const el = containerRef.current;
    const delta = e.clientY - dragStartY.current;
    const scrollRatio = el.scrollHeight / el.clientHeight;
    el.scrollTop = dragStartScrollTop.current + delta * scrollRatio;
    updateThumb();
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  const onTrackClick = (e) => {
    if (e.target === thumbRef.current) return;
    const el = containerRef.current;
    const track = e.currentTarget;
    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const ratio = clickY / track.clientHeight;
    el.scrollTop = ratio * el.scrollHeight;
    updateThumb();
  };

  return (
    <div className="relative flex max-h-[800px] min-w-max">
      <div
        ref={containerRef}
        onScroll={updateThumb}
        className="overflow-y-auto w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {children}
      </div>

      {showScrollbar && (
        <div
          onClick={onTrackClick}
          className="w-1.5 bg-gray-200 rounded-full relative flex-shrink-0"
        >
          <div
            ref={thumbRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="absolute w-full bg-gray-400 hover:bg-gray-500 rounded-full cursor-grab active:cursor-grabbing"
            style={{ height: thumbHeight, top: thumbTop }}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollableList;