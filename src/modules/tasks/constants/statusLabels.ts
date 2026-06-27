import { Status } from '../types/types';

export const statusLabels: Record<Status, string> = {
    [Status.TODO]: 'Сделать',
    [Status.PROGRESS]: 'В прогрессе',
    [Status.DONE]: 'Сделано',
};