import { ReactNode } from "react";

type StatsProps = {
    children: ReactNode;
};

export default function Stats({ children }: StatsProps) {
    return (
        <div className="flex gap-5 mt-10 mb-10 w-full">
            { children }
        </div>
    );
}