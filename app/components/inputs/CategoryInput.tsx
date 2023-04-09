'use client';

import { IconType } from 'react-icons';

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
    onClick,
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`rounded-xlborder-2p-4flexflex-colgap-3 hover:border-blacktransitioncursor-pointer 
                ${selected ? 'border-black' : 'border-neutral-200'}`}>
            <Icon size={30} />
            <div className="font-semibold">{label}</div>
        </div>
    );
};

export default CategoryBox;
