interface LoadingProps {
  size: number;
}

export const Loading = ({ size }: LoadingProps) => {
  return (
    <main className="min-h-[80vh] w-full flex items-center justify-center">
      <div
        className={`animate-spin h-${size} w-${size} mr-3 rounded-full border-x-2 border-solid border-gray-600`}
      ></div>
    </main>
  );
};
