import { NextResponse } from 'next/server';
import getCreators from './getCreators';

export const runtime = 'edge';

export async function GET() {
  try {
    const mapped = getCreators() as any;
    return NextResponse.json({ creators: mapped[0][0].value.value }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
