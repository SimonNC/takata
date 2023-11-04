function Error({ error }) {
  return (
    <div
      className={`flex items-center bg-red-100 border border-red-500 text-red-700 text-sm font-bold px-4 py-3 rounded-b-lg`}
      role="alert">
      {error}
    </div>
  );
}

export default Error;
