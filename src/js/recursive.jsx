function CustomButton({ children, className, ...rest }) {
  return (
    <div className={formatClassName("custom-button", className)} {...rest}>
      {children}
    </div>
  );
}

function IconFlag() {
  return (
    <img
      src="src/svg/flag.svg"
      alt="Flag"
      width={SIDE_CELL * 0.8}
      height={SIDE_CELL * 0.8}
    />
  );
}

function Firma() {
  return (
    <div className="firma">
      <a href="https://www.youtube.com/@JeffAporta">Jeff Aporta</a> (2025)
    </div>
  );
}
