import z from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const feedbackRouter = createTRPCRouter({
  createFeedback: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        message: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { db, session } = ctx;
      const { name, message } = input;

      const feedback = await db.feedback.create({
        data: {
          name,
          message,
          createdById: session?.user.id!,
        },
      });

      return feedback;
    }),
});
