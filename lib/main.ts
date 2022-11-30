import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution";
import { editor, IRange, Uri } from "monaco-editor/esm/vs/editor/editor.api";
import { SchemasSettings, setDiagnosticsOptions, yamlDefaults } from "monaco-yaml";
import YamlWorker from 'monaco-yaml/yaml.worker.js?worker';

// @ts-ignore
self.MonacoEnvironment = {
	getWorker(_: any, __: string) {
			return new YamlWorker();
	}
};

export { editor, type IRange, Uri, setDiagnosticsOptions, yamlDefaults, type SchemasSettings };
