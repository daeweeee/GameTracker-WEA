import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default function AktHraneDiv({ children }: Props) {
    return (
        <div className="flex gap-10 mt-5 mb-10">
            {children}
        </div>
    );
}