import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export function cx(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames));
}
