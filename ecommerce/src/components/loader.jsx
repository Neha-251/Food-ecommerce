const Loader = () => {
  return (
    <div className="fixed z-50 left-0 top-0 h-screen w-screen bg-zinc-500/75 flex justify-center items-center">
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full bg-rose-500 animate-bounce ease-in-out"></div>
        <div className="h-8 w-8 rounded-full bg-green-500 animate-bounce ease-in duration-200 delay-100"></div>
        <div className="h-8 w-8 rounded-full bg-sky-500 animate-bounce ease-in-out duration-300 delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;
