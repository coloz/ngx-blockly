import { BlockMutator } from 'ngx-blockly';
import { CustomMutator } from './custom-mutator';

export class ExampleMutator extends BlockMutator {

    private _itemCount = 0;

    constructor(name, blockList = null) {
        super(name, blockList);
    }

    decompose(block: any, workspace: any) {
        console.log('decompose');
        const containerBlock = workspace.newBlock('math_number');
        containerBlock.initSvg();
        return containerBlock;
    }

    compose(block: any, topBlock: any) {
        console.log('compose');
    }

    saveConnections(block: any, containerBlock: any) {
        console.log('saveConnections');
    }

    afterBlockInit(block: any) {
        console.log('afterBlockInit');
        block.setMutator(new CustomMutator(block));
    }

    loadExtraState(state: any): any {
        this._itemCount = state['_itemCount'];
        console.log(this._itemCount);
    }

    saveExtraState(): any {
        console.log(this._itemCount);
        return {
            'itemCount': this._itemCount++,
        };
    }


    mutationToDom(block: any) {
        console.log('asdasd');
    }

    domToMutation(block: any, xmlElement: any) {
        console.log('asdaaasd');
    }
}
