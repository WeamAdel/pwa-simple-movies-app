export function getErrorTemp(message: string) {
	const template = document.getElementById('error-message-template') as HTMLTemplateElement;

	if (!template) {
		return;
	}

	const content = template.content.cloneNode(true) as HTMLDivElement;
	const messageText = content.querySelector('.error-message__text') as HTMLDivElement;
	messageText.textContent = message;
	return content;
}
