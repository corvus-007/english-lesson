function CaptionBox({ caption, children }) {
  return (
    <div className="captionBox">
      <p className="captionBox__caption">{caption}</p>
      {children}
    </div>
  );
}

export default CaptionBox;
