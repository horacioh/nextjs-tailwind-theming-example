import { useTheme } from "../utils/themeContext";
export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div className={`content-transition duration-200 ${theme}`}>{children}</div>
  );
}
