import path from "path";
import readYamlFile from "read-yaml-file";

export interface iTemplateConfig{
    site?: {
        title: string,
        description: string,
    }
    personal?:{
        name?: string,
        avatar?: string,
        socialNetworks?: {
            youtube?: string,
            github?: string,
            linkedin?: string,
        }
    }
}

export async function withTemplateConfig(props = {}){
    const PATH_TEMPLATE_CONFIG = path.resolve('.', 'templateConfig.yml');
    const templateConfig = await readYamlFile<iTemplateConfig>(PATH_TEMPLATE_CONFIG);

    return {
        ...props,
        templateConfig
    }
}