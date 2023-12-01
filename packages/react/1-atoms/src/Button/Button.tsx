interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button style={{ background: 'red' }}>{label}</button>;
};
