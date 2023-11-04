export default function AccordionItem({
  num,
  title,
  text,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title text-sm lg:text-base">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box">
          <p className="text-sm lg:text-base">{children}</p>
        </div>
      )}
    </div>
  );
}
