import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "svelte-course-5618d";
const FB_CLIENT_EMAIL = "firebase-adminsdk-syjol@svelte-course-5618d.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6u1XEYRIzWf6S\n7QKJDOSQiITLxT5j3ob329qUsyO0XwD/p+mxIbZQ4pxjqH4doDG4m/lqeXS5nEYy\nec0jLQ4xug1uFrbS/VlZ9xhPHVTe+wZi9TICqG0/eJ0KCIl0ZkTRKlnlSk3WhlKE\nRNNXxCZwMFHSroI5iH4KnwY90FdgOkd5SUQwHssdyMly2y4otPwdJXFrzIlDH83x\nn40ehhj3QOndbQSh1wWAlr4tGAS/Qw6vxbv+Syk2Y341s+FC8eC/IOMjnPDjmqDB\n3U5qPusXbHqjryouMdWXblw4LaizbciDxA5MqddoqcNNggf0q0mEt7W5dsQ4kxkj\n4wF0LiIlAgMBAAECggEAC5iyvN1iafn+y1UYwTYhw7AWvyjitQUO0LnAm1d8sijs\nQPRGmQ+E6QUJvU6rdl+KdvKIzMn6K8S+v0e9K6ASr5fkWZ/jfrrpH6MuyUsDCE4C\nmYassmmPT0/IQOVC1A293FeK+ahhqR7yZPB5R4wQ7wqxKipYQAZv/Wze0Fvt8TXS\nLD6HjB2Bs/idOJusbSNWisqizX4xqyD1WF+JvC3i4pqIc0mCwC6rbTbSXO5E8XEg\nC/e5fFb453BIZjNlSLXqv/W0Gbpn+vddC8dABO6be86TDbS6mXTEXS/g8/+eCbLg\nHLN9SGBMLdhvVDV5iIqbPoJPctxkPKWCf9IguRTAiQKBgQDgNEqw4zhAj2Ai77EH\nP3JYNDRQYM03DIrXX/ekuy9ZTWJJbK6/q1D/luQ6kNrSbfhzyOc2zzXiiKS4WFn+\nR8sAC3jJuT7p8pZlbCtltueViVPYTZTK2nt3+7hQhh+nQPwdJhaRPeM+VI8R1SD7\np9HZ8OhseEiYocPIgHZfFXpAswKBgQDVNpv2Y5qSAuDWvftqafePBOu+yUSQJhAX\nESj4YdpkjfqdDh6g8OYoY5SZxDQFbPZ6YIfhI3sYO7J0cU2XPmDnoOJXF6+QGfE8\nRPH0As5wcyvz9kIbAbtIehuOaG07m+ZsHavaqQf6cAY9cYkRdPhlUUpR3G0AH5Ga\nBWHICJBNxwKBgQCVu1aGe7j9pMMXkewwYvcCYRru8zcaJI40+CpzIW+lvEB/uM2b\nw9X8W9FgK414K2laKjoAKLJb79XSJ28yms+/3+lzDvwtUY2PfoYdD+HpxCTyuB0+\nvFro7ntRi8Fn+cZl0SIRLbutzNsfla7JYnKLkpAmoM4a4S3XobNsHPPgcQKBgQCB\nm/u9EJlizwscn0qZSqdpsmUYikL6mZjIXO8Z5mobHE/Pb0jhLu/Kd5ZazvGMpstC\nYzHWg3oNpiR6MnInUY0Y4S0WIljf8VU6/PJUEeyqYOjEGdvfjPLrQQdFT2evh7rP\n2E2i04P9EmJIsZ7QFNn2xS63ipZcL9ST21ewgLwv+wKBgQDSpit2IH71XDQjk+ih\nX78jX/DX82T4SX5yANrciEw92cWl2F5V6mvTglIkIUNjOARgdDLLXinCq8qMufbZ\nE5dCEB579iMKRs6iKl9RtzOL5wmgHrNDy4ZsN1IfSt6Fpj21bH/MjbzieonQ7dIG\n/78Pc5JCg3qRG1N0jCj4R+qzyg==\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
      projectId: FB_PROJECT_ID
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
