export default function Button({ children, textOnly, className, ...props }) {
  let styles = textOnly ? "text-button" : "button";
  styles += " " + className;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
