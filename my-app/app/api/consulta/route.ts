import { NextResponse } from 'next/server';

export async function GET() {
    //una llamada a prisma para obtener datos
    const datosDesdeConsulta = { name: 'El nombre de algo sadasdasdasdasdads que puede llegar de la BD' };
  return NextResponse.json(datosDesdeConsulta);
}