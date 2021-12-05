export default function handler(req, res) {
	const codigo = req.query.codigo;
	res.status(200).json({
		id: codigo,
		name: `Maria${codigo}`,
		email: `mariamaria${codigo}@email.com`,
	});
}
