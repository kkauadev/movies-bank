interface AsideBoxProps {
  title: string;
  data: string | number | null | undefined;
}

export const AsideBox = ({ title, data }: AsideBoxProps) => {
  const verify = (item: string | number | null | undefined) => {
    if (item || item != 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      {verify(data) && (
        <li>
          <h6 className="text-lg font-bold">{title}</h6>
          <span>{data}</span>
        </li>
      )}
    </>
  );
};
