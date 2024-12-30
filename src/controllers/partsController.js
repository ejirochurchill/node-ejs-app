class PartsController {
    constructor() {
        this.parts = [];
    }

    addPart(req, res) {
        const { partName, partNumber, purchaseInfo, price } = req.body;
        const newPart = { partName, partNumber, purchaseInfo, price };
        this.parts.push(newPart);
        res.redirect('/parts/list');
    }

    editPart(req, res) {
        const partId = req.params.id;
        const part = this.parts[partId];
        if (part) {
            res.render('parts/edit', { part });
        } else {
            res.status(404).send('Part not found');
        }
    }

    updatePart(req, res) {
        const partId = req.params.id;
        const { partName, partNumber, purchaseInfo, price } = req.body;
        const updatedPart = { partName, partNumber, purchaseInfo, price };
        this.parts[partId] = updatedPart;
        res.redirect('/parts/list');
    }

    deletePart(req, res) {
        const partId = req.params.id;
        this.parts.splice(partId, 1);
        res.redirect('/parts/list');
    }

    listParts(req, res) {
        res.render('parts/list', { parts: this.parts });
    }
}

module.exports = new PartsController();