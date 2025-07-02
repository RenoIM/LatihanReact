export type TodoItemProps = {
    filter(arg0: (todo: any) => boolean): unknown;
    id: number;
    todo: string;
    status: number;
    isDeleted: (id: number) => void;
    onMarkDone: (id: number) => void;
    onDelete: (id: number) => void;
};