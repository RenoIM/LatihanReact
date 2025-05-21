export type TodoItemProps = {
    id: number;
    todo: string;
    status: number;
    isDeleted: (id: number) => void;
    onMarkDone: (id: number) => void;
    onDelete: (id: number) => void;
};