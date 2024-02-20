import { FreshContext } from "$fresh/server.ts";
import sendMail from "../../lib/mail.ts";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  if (req.method === "POST") {
    try {
      const { message } = await req.json();
      // sendMail(message);
      console.log(message);
      return Response.json({ success: true });
    } catch {
      return Response.json({ success: false });
    }
  }

  return Response.json({ success: false });
};
