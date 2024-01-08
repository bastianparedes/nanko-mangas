import { JSX } from "preact";

const Button = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className="font-mono font-black hover:text-slate-500"
    />
  );
};

export default Button;
