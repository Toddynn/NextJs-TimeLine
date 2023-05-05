import Head from "next/head";
import type {iTemplateConfig} from './TemplateConfig'
import { TemplateConfigProvider } from "./TemplateConfigContext";

interface iTemplatePageHOCProps {
    title?: string;
}

export default function TemplatePageHOC(Component:(props:any)=>JSX.Element, templatePageHOCProps: iTemplatePageHOCProps = {}){
    return function WrappedComponent(props:{templateConfig: iTemplateConfig}){
        return (
            <>
                <Head>
                    <title>
                        {
                            templatePageHOCProps?.title ?
                                `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
                            :
                                props.templateConfig.site.title
                        }
                    </title>
                </Head>
                <TemplateConfigProvider value={props.templateConfig}>
                    <Component {...props}/>
                </TemplateConfigProvider>
            </>
        )
    }
}