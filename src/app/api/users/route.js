import { NextResponse } from "next/server";

// Function GET
export async function GET() {
  try {
    const successMessage = "ดึงข้อมูลผู้ใช้สำเร็จ";

    // ปริ้นท์ข้อความลง Terminal (Server Console)
    console.log("[GET /api/users] Success:", successMessage);

    return NextResponse.json(
      {
        success: true,
        message: successMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    // ปริ้นท์ข้อผิดพลาดลง Terminal (Server Console)
    console.error("[GET /api/users] Error:", errorMessage);

    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}