import { createToast } from "vercel-toast";
import 'vercel-toast/dist/vercel-toast.css'



export const messageError = (text, delay = 5000) => createToast(text, {
	timeout: delay,
	type: 'error'
});