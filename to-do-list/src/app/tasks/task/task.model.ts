export interface Task {
  id: string;
  title: string;
  text: string;
  status: 'completed' | 'pending';
}
