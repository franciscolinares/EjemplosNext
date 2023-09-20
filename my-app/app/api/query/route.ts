import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'El nombre de algo que puede llegar de la BD' });
}