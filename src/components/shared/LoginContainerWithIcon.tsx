import { LoginContainerWithIconProps } from "../../types";

export default function LoginContainerWithIcon({
  icon,
  text,
}: LoginContainerWithIconProps) {
  return (
    <div className="w-full h-[50px] pl-10 pr-10 rounded-full p-5 flex items-center gap-5 border border-gray-300">
      <img src={icon} alt={`Icon ${text}`} />
      <span className="text-white text-2xl font-bold">{text}</span>
    </div>
  );
}
