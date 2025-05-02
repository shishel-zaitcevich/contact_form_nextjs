import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Имя не может быть пустым'),
  email: z.string().email('Неверный формат email'),
  message: z.string().min(1, 'Сообщение не может быть пустым'),
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    formSchema.parse({ name, email, message });

    const responseString = `Имя: ${name}, Email: ${email}, Сообщение: ${message}`;

    return NextResponse.json({ message: responseString }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Ошибка при обработке запроса:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера.' },
      { status: 500 }
    );
  }
}
