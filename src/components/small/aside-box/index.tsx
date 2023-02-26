interface AsideBoxProps {
  title: string;
  data: string | number;
}

export const AsideBox = ({ title, data }: AsideBoxProps) => {
  return (
    <li>
      <h6 className="text-lg font-bold">{title}</h6>
      <span>{data}</span>
    </li>
  );
};
