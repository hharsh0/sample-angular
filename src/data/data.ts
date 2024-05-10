interface data {
  name: string;
  age: number;
  department: string;
  isEditing: boolean;
}

export const employees: data[] = [
  { name: 'John Doe', age: 30, department: 'Engineering', isEditing: false },
  { name: 'Jane Smith', age: 35, department: 'Marketing', isEditing: false },
  { name: 'Mike Johnson', age: 40, department: 'Finance', isEditing: false },
];
