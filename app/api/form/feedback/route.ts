import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { FeedbackDetails, PerformanceEvalutationForm } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();
    const feedback = await getFeedback(form);
    return NextResponse.json({
      status: "success",
      feedback,
    });
  } catch (error: any) {
    console.error(`🚀 ~ file: route.ts:47 ~ error:`, error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    let feedbackDetails = (await req.json()) as FeedbackDetails;
    const feedback = await updateFeedback(feedbackDetails);
    return NextResponse.json({
      status: "success",
      feedback,
    });
  } catch (error: any) {
    console.error(`🚀 ~ file: route.ts:47 ~ error:`, error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
const getFeedback = async (
  form: PerformanceEvalutationForm
): Promise<FeedbackDetails | null> => {
  let feedbackDetails = await prisma.feedbackDetails.findFirst({
    where: {
      formId: form.id,
    },
  });
  if (!feedbackDetails) {
    feedbackDetails = await prisma.feedbackDetails.create({
      data: {
        formId: form?.id,
      },
    });
    const form2 = prisma.performanceEvalutationForm.update({
      where: {
        id: form.id,
      },
      data: {
        feedbackDetailsId: feedbackDetails.id,
      },
    });
  }
  return feedbackDetails;
};
const updateFeedback = async (
  form: FeedbackDetails
): Promise<FeedbackDetails | null> => {
  let feedbackDetails = await prisma.feedbackDetails.upsert({
    where: {
      id: form.id,
    },
    update: {
      term_I_current_year_student_feedback:
        form.term_I_current_year_student_feedback,
      term_II_previous_year_student_feedback:
        form.term_II_previous_year_student_feedback,
      term_I_current_year_peer_feedback: form.term_I_current_year_peer_feedback,
      term_II_previous_year_peer_feedback:
        form.term_II_previous_year_peer_feedback,
      formId: form.formId,
    },
    create: {
      term_I_current_year_student_feedback:
        form.term_I_current_year_student_feedback,
      term_II_previous_year_student_feedback:
        form.term_II_previous_year_student_feedback,
      term_I_current_year_peer_feedback: form.term_I_current_year_peer_feedback,
      term_II_previous_year_peer_feedback:
        form.term_II_previous_year_peer_feedback,
      formId: form.formId,
    },
  });

  return feedbackDetails;
};
