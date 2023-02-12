function Input({ type, className, placeholder, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`h-full border-0 focus:ring-0 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
