import { ReactNode } from "react";

export default function Knihovna({ children }: { children?: ReactNode } ) {
    return (
        <div className="h-120 flex mb-10 gap-5">
            { children }
        </div>
    );
}