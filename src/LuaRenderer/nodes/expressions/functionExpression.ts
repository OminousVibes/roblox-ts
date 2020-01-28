import * as lua from "LuaAST";
import { RenderState } from "LuaRenderer";
import { renderParameters } from "LuaRenderer/util/parameters";
import { renderStatements } from "LuaRenderer/util/statements";

export function renderFunctionExpression(state: RenderState, node: lua.FunctionExpression) {
	if (!node.statements.head) {
		return `function(${renderParameters(state, node)}) end`;
	}

	let result = "";

	result += `function(${renderParameters(state, node)})\n`;
	state.pushIndent();
	result += renderStatements(state, node.statements);
	state.popIndent();
	result += state.indent + `end`;

	return result;
}
