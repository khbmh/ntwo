import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto h-[80vh]">
      <h1 className="text-5xl font-extrabold">Learn and Practice</h1>
      <p className='my-6'>Practice makes a man perfect</p>
      <p className='max-w-[95wh] lg:max-w-[50vw] opacity-80 text-center'>
        Consistent practice helps individuals improve their skills, overcome
        mistakes, and gain mastery over time. By repeating an action regularly,
        one builds confidence, sharpens abilities, and achieves greater accuracy
        and efficiency. Just as learning deepens through repetition, continuous
        effort leads to excellence. Therefore, the more you practice, the closer
        you get to perfection in any field.
      </p>
    </div>
  );
}
