import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
};

const email = async (req: any, res: any) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAILSERVER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAILUSER as string,
      pass: process.env.EMAILPASS as string,
    },
  });

  try {
    if (req.body.name && req.body.email && req.body.phone && req.body.message) {
      let info = await transporter.sendMail({
        from: '"' + req.body.name + '" <' + req.body.email + ">",
        to: "tobiasdemaine@gmail.com",
        subject: "DE MAINE WEBSITE ENQUIRY",
        text:
          "name : " +
          req.body.name +
          "\n\n" +
          "phone : " +
          req.body.phone +
          "\n\n" +
          "\n\n" +
          req.body.message, // plain text body
      });
      res.status(200).send({ message: "successs" });
    } else {
      res.status(500).send({ message: "no" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  email(req, res);
}
