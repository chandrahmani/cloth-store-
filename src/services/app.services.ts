import { Product } from '@/types/index';
import axios from 'axios';

// create a get api method with axios
export const fetchUser = async () => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json',
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: 'T-Shirt',
      price: 450,
      image: 'https://img-c.udemycdn.com/course/750x422/5444528_d4e3_5.jpg',
      description: 'Soft cotton t-shirt',
    },
    {
      id: 2,
      name: 'Jeans',
      price: 650,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD_emepUuvs9RGmy21w2xoAEb7f8H0aWVZA&s',
      description: 'Slim fit denim',
    },
    {
      id: 3,
      name: 'Cotton Soprts Pants',
      price: 300,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1MQt6P79SxY9m_9gF-kBylmxh0N93Soe9A&s',
      description: 'Soft cotton t-shirt',
    },
  ];
};

interface CreateTodoResult {
  data: unknown;
  error: string | null;
}

// create a post api method with axios
export const createTodo = async (
  title: string,
  completed: boolean = false,
): Promise<CreateTodoResult> => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed,
    });
    return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
