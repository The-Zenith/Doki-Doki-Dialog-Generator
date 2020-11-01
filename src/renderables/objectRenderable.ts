import { DeepReadonly } from '@/util/readonly';
import { IObject } from '@/store/objects';
import { SpriteFilter } from '@/store/sprite_options';
import { OffscreenRenderable } from './offscreenRenderable';
import { IRootState } from '@/store';
import { Store } from 'vuex';
import { CompositeModes } from '@/renderer/rendererContext';

export abstract class ObjectRenderable<
	Obj extends IObject
> extends OffscreenRenderable {
}
