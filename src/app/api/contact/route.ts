// src/app/api/submit-form/route.js

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

    // Валидация данных с использованием Zod
    formSchema.parse({ name, email, message });

    // Формирование строки с данными
    const responseString = `Имя: ${name}, Email: ${email}, Сообщение: ${message}`;

    // Возврат строки клиенту
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
