import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};

type mdxProps = {
  code: string;
};

export const MDXContent = ({ code }: mdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
