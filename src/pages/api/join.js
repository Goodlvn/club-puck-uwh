// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";

export default async (req, res) => {

  const clientObj = JSON.parse(req.body);

  const SCOPES = [
    "https://www.googleapis.com/auth/contacts",
    "https://www.googleapis.com/auth/admin.directory.group"
  ]
  const sendFrom = "admin@clubpuck.com"

  const client = new google.auth.JWT(
    process.env.client_email,
    null,
    process.env.private_key,
    SCOPES,
    sendFrom
  );

  client.authorize((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      getData(client);
    }
  })

  const getData = async (client) => {
    const lib = google.admin({ version: "directory_v1", auth: client });
    try {
      const response = await lib.members.insert({
        groupKey: "newplayers@clubpuck.com",
        requestBody: {
          email: clientObj.email,
          role: "MEMBER",
          type: "USER",
        }
      })
      res.status(200).send(response);
    } catch (error) {
      res.status(200).send(error);
      // console.log(error);
    }
  }
}
