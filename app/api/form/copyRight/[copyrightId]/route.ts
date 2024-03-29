import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { copyRightId: string } }
) {
  try {
    let copyRight = await prisma.copyRight.delete({
      where: {
        id: params.copyRightId,
      },
    });

    return NextResponse.json({
      status: "success",
      copyRight,
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
