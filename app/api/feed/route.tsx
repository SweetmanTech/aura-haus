import getInitialFeed from '@/lib/getInitialFeed';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const feed = await getInitialFeed();
    return NextResponse.json(feed, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  }
}
